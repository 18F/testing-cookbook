---
title: Load testing
permalink: /load/
---
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

## wrk

[wrk](https://github.com/wg/wrk) is a lightweight benchmarking tool capable of high concurrency on a single core. From the docs:

    Basic Usage

    wrk -t12 -c400 -d30s http://127.0.0.1:8080/index.html

    This runs a benchmark for 30 seconds, using 12 threads, and keeping
    400 HTTP connections open.

    Output:

    Running 30s test @ http://127.0.0.1:8080/index.html
        12 threads and 400 connections
        Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency   635.91us    0.89ms  12.92ms   93.69%
        Req/Sec    56.20k     8.07k   62.00k    86.54%
        22464657 requests in 30.00s, 17.76GB read
    Requests/sec: 748868.53
    Transfer/sec:    606.33MB

## More options
* Commercial solutions
    * [BlazeMeter](https://blazemeter.com)
    * [Blitz](https://blitz.io)
    * [Loader](https://loader.io)
* [List on Wikipedia](https://en.wikipedia.org/wiki/Web_server_benchmarking#Tools_for_benchmarking)
