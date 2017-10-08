# thebab

> It does shit.

# Development Instructions

It is suggested that you use `nvm` to manage your Node versions. To install `nvm`:
```
npm i -g nvm
```
Next, install the versions of Node you wish to work with:
```
nvm install 8.6.0
nvm install 6.9.2
// etc...
```

### Running thebab Locally

```
git clone https://github.com/colshacol/thebab
cd thebab
nvm use
npm i
npm start
```

### Other Tools of Interest
`ntl` is a tool that will list your `npm` scripts for you to choose to execute.
```
npm i -g ntl
ntl
```