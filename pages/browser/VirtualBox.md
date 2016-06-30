---
title: VirtualBox
permalink: /browser/virtualbox/
parent: Browser testing
---
## Browser Testing with VirtualBox
[VirtualBox] is a virtualization tool that allows you to run "guest" operating systems *within* your computer's native (or "host") OS. Some 18F projects use VirtualBox with [Vagrant] to create isolated development environments (namely, Linux) that more closely match their production environments. Thanks to Microsoft, we can also download canned Windows OS virtual machines and run them on our Macs to interactively test sites in Internet Explorer.

> Installing VirtualBox and downloading the Windows VMs can be time consuming. If you don't have the time or you'd rather not do this, check out some [other testing services](../services/).

### <a name="download-virtualbox"></a> 1. Download VirtualBox
Visit [virtualbox.org](https://www.virtualbox.org/wiki/Downloads), find the **VirtualBox 4.X.XX for OS X hosts** item under **VirtualBox platform packages**, and click the **x86/amd64** link next to it:

![image](https://cloud.githubusercontent.com/assets/113896/6258476/9f8bddcc-b77d-11e4-80f8-2553f07482f4.png)


### <a name="download-vms"></a> 2. Download the Internet Explorer Virtual Machines
There are two ways to do this:

1. Visit [modern.ie](https://www.modern.ie/en-us/virtualization-tools#downloads) and download each VM that you wish to test individually. After downloading a VM file, just double-click it in the Finder and VirtualBox should add it for you.
2. Use [ievms](https://github.com/xdissent/ievms) to download and install all of the IE VMs from the terminal in one fell swoop:

    ```sh
    curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | bash
    ```
    
    See the [ievms installation guide](https://github.com/xdissent/ievms#installation) for more information.

In either case, you might want to download the VMs overnight because they're *big*, and even on fast connections they will likely take several hours to download.

### 3. Launch VirtualBox
Use OS X's Spotlight <kbd>CMD-Space</kbd> or navigate to the Applications directory in the Finder by hitting <kbd>CMD-SHIFT-G</kbd> and entering `/Applications`, then open VirtualBox. You should see something like this:

![image](https://cloud.githubusercontent.com/assets/113896/6258517/0322672a-b77e-11e4-84c0-03e76340b2d1.png)

The panel on the left-hand side lists your installed virtual machines. If you don't see anything there, you may not have installed your VMs correctly. Go back to [step 2](#download-vms) and try again.

If you *do* see virtual machines listed, just double-click one to launch it. VirtualBox should prompt you to install extensions in the guest OS (the virtual Windows) the first time that it launches a new VM. Do this; it'll make working with the VMs easier.

### <a name="find-ie"></a> 4. Find Internet Explorer
If all goes well, you should see the Windows boot screen in a separate window and, eventually, a mostly blank Windows desktop. Depending on the version of Windows that you're running, you should see a Start button in the lower left-hand corner. Click it, and you should see something like one of these (Windows XP on the left, Windows 7 on the right):

![image](https://cloud.githubusercontent.com/assets/113896/6258693/9d5d04e8-b77f-11e4-983f-1d118c912f43.png) ![image](https://cloud.githubusercontent.com/assets/113896/6258737/f70316fe-b77f-11e4-94ff-e2792aea0c0c.png)

In XP (on the left) you can launch IE by clicking on the **Internet** link at the top; in Windows 7 you can either just type `internet` and hit <kbd>RETURN</kbd> in the *Search programs and files* input at the bottom, or navigate to **All Programs** > **Internet Explorer**.

### <a name="test-your-stuff"></a> 5. Test Your Stuff
If you're looking to test a public site, you should be able to just enter the URL into IE and test it interactively. To test sites running on your *host* OS, replace `localhost` or `127.0.0.1` in your local development URL with `10.0.2.2`. For instance, if you're testing the [18F site](https://github.com/18f/18f.gsa.gov) (or any Jekyll site serving on the default port 4000), you would use the URL `http://10.0.2.2:4000`. **Note**: If you leave off the `http://` prefix in Internet Explorer, it may send you to a Bing search.

[VirtualBox]: http://virtualbox.org/
[Vagrant]: https://www.vagrantup.com/
