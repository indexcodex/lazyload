# lazyload
Load image when it is visible in the viewport

# how to use
- step 1: add the script in the head  
```
<head>
  <script src="lazyload.js" />
</head>
```
- step 2: in your image tag, src should contain the placeholder image, while data-src should contain the actual image  
```
<img src="link-to-placeholder-image" data-src="link-to-actual-image" />
```

---

this is the only step needed for lazyloading to work. the script will handle the rest
