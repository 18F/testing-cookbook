---
title: Go testing
permalink: /go/
---

## The `testing` package

### What Is It?
Go's [testing](https://golang.org/pkg/testing/) package provides automated testing out-of-the-box.

### When to Use It?
Great for:

1. unit testing
2. benchmarks (i.e. testing how long a certain section of code runs)

### How to Use It?

Here's an example of writing a unit test

#### Sample source file
Given a source code file `hello.go` which just prints out "Hello" twice via a function `SayTwice` upon execution:

```go
package main

import (
	"fmt"
)

func SayTwice(text string) string {
	return text + text
}

func main() {
	fmt.Println(SayTwice("Hello"))
}
```

#### Creating unit tests.
1. Create a file called `hello_test.go` (all Go test files must have the suffix `_test.go`)
2. Import `testing`
3. Create a function in which the name begins with `Test` and takes in `*testing.T` (used by the test runner)
  1. Tabular tests are **only** good for pure functions like this one. (**Refer to this [link](https://pages.18f.gov/automated-testing-playbook/principles-practices-idioms/#avoid-data-driven-tests) as to why you shouldn't use the tabular testing pattern otherwise**)
  2. For our tabular test, create a simple struct that will hold simple string input and output variables.
  3. Create the various test cases to be tested.
  4. Loop through the tests.
4. Use [Error](https://golang.org/pkg/testing/#T.Error), [Fail](https://golang.org/pkg/testing/#T.Fail) or [Fatal](https://golang.org/pkg/testing/#T.Fatal) to indicate that a test has failed.

(_Refer to the numbering above to the comments in the code below_)

```go
package main

import (
	"testing"  // 2
)

// 3.2
type sayTwiceTest struct {
	input          string
	expectedOutput string
}

// 3.3
var sayTwiceTests = []sayTwiceTest{
	{"Hello", "HelloHello"},
	{"Bye", "ByeBye"},
}

func TestSayTwice(t *testing.T) {
	for _, test := range sayTwiceTests {  // 3.4
		if output := SayTwice(test.input); output != test.expectedOutput {
			// 4
			t.Errorf("Expected SayTwice to return (%s), Found (%s)\n", test.expectedOutput, output)
		}
	}
}
```

## `agouti` + `ginkgo` + `gomega` stack


### What Is It?
* [`Ginkgo`](http://onsi.github.io/ginkgo/) is a BDD testing framework
* [`Gomega`](http://onsi.github.io/gomega/) is the preferred matcher library for Ginkgo (although you can use any matcher library with Ginkgo)
* [`Agouti`](http://agouti.org/) is a webdriver client (Selenium, PhantomJS, SauceLabs, etc)

When `Agouti`, `Ginkgo`, and `Gomega` are combined, you have an acceptance testing framework for web apps.

### When to Use It?
Great for writing expressive, human readable (for other technical people) acceptance / integration tests for a web app.

### How to Use It?
`ginkgo` can generate tests for agouti.

An example from the `agouti` website shows how one might test user login.

```go

package potato_test

import (
    . "path/to/potato"
    . "github.com/onsi/ginkgo"
    . "github.com/onsi/gomega"
    . "github.com/sclevine/agouti/matchers"
    "github.com/sclevine/agouti"
)

var _ = Describe("UserLogin", func() {
    var page *agouti.Page

    BeforeEach(func() {
        StartMyApp(3000)
        
        var err error
        page, err = agoutiDriver.NewPage(agouti.Browser("firefox"))
        Expect(err).NotTo(HaveOccurred())
    })

    AfterEach(func() {
        Expect(page.Destroy()).To(Succeed())
    })

    It("should manage user authentication", func() {
        By("redirecting the user to the login form from the home page", func() {
            Expect(page.Navigate("http://localhost:3000")).To(Succeed())
            Expect(page).To(HaveURL("http://localhost:3000/login"))
        })

        By("allowing the user to fill out the login form and submit it", func() {
            Eventually(page.FindByLabel("E-mail")).Should(BeFound())
            Expect(page.FindByLabel("E-mail").Fill("spud@example.com")).To(Succeed())
            Expect(page.FindByLabel("Password").Fill("secret-password")).To(Succeed())
            Expect(page.Find("#remember_me").Check()).To(Succeed())
            Expect(page.Find("#login_form").Submit()).To(Succeed())
        })
        
        By("allowing the user to view their profile", func() {
            Eventually(page.FindByLink("Profile Page")).Should(BeFound())
            Expect(page.FindByLink("Profile Page").Click()).To(Succeed())
            profile := page.Find("section.profile")
            Eventually(profile.Find(".greeting")).Should(HaveText("Hello Spud!"))
            Expect(profile.Find("img#profile_pic")).To(BeVisible())
        })

        By("allowing the user to log out", func() {
            Expect(page.Find("#logout").Click()).To(Succeed())
            Expect(page).To(HavePopupText("Are you sure?"))
            Expect(page.ConfirmPopup()).To(Succeed())
            Eventually(page).Should(HaveTitle("Login"))
        })
    })
})
```
