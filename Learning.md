## Personal Learning From Project

- Vercel.json: \
   This is configuration file that verel uses while deployment it is not mandatory but good practice if any issue comes at deployment time.

```bash
  {
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/"
        }
    ]
  }
```

This configuration tells Vercel to send all requests (like /experience, /about, etc.) to the root / path, where React's routing will handle them client-side.
