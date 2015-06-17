---
layout: default
permalink: /load/
---
# Load Testing
Load testing simulates the performance of an application under (typically concurrent) use. Load testing can be useful to estimate resources required for an application to perform well under varying levels of activity. Simple load tests may send requests to a set of URLs at fixed intervals; more realistic tests may simulate sequences of user behavior (load homepage, log in, upload a file, log out).

## Locust.io
Locust is an open-source load testing tool written in Python 2 (Note: because Locust depends on the gevent library, it doesn't work under Python 3). Locust provides both a interactive graphical interface through the browser and a command-line interface, and can be run with multiple slave nodes for highly concurrent testing. Locust configuration files are Python programs that describe the behavior of simulated users. From the [docs](locust.io):

    from locust import HttpLocust, TaskSet, task

    class WebsiteTasks(TaskSet):
        def on_start(self):
            self.client.post("/login", {
                "username": "test_user",
                "password": ""
            })
        
        @task
        def index(self):
            self.client.get("/")
            
        @task
        def about(self):
            self.client.get("/about/")

    class WebsiteUser(HttpLocust):
        task_set = WebsiteTasks
        min_wait = 5000
        max_wait = 15000

Locust is currently used by the OpenFEC team; for an example configuration file, see https://github.com/18F/openFEC/blob/develop/locustfile.py.

## Commercial solutions
For commercial solutions, see https://blazemeter.com, https://blitz.io, or https://loader.io.
