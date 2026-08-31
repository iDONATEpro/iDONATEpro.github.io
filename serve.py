#!/usr/bin/env python3
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import os

ROOT = os.path.dirname(os.path.abspath(__file__))

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", "4173"))
    httpd = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    print(f"Serving {ROOT} on http://127.0.0.1:{port}", flush=True)
    httpd.serve_forever()
