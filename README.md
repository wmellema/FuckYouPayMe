# FuckYouPayMe

This project is catered to the frustrated webdeveloper who is not paid on time, and he who wants a way to get back to them.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

For this project you will need the following software:
* [npm](https://www.npmjs.com/get-npm)

### Installing

For the installation of this package you will need to install this project into your project. This can be done with the following command.

```
npm i fuckyoupayme
```

This will add the fuckyoupayme library to your `node_modules` folder.

Note: When installing in production: append the `--production` flag in order to avoid installing the dev dependencies like webpack

## Working with the installation

### - Production
If just installing on a production environment, or just wanting to use the normal modal: You can include the following snippet of code below the closing body tag of your website.

`<script type="text/javascript" src="/node_modules/fuckyoupayme/dist/bundle.js"></script>`

### - Development

If you want to change the way the modal looks, you can edit the corresponding files in the src directory.

If you want to generate a new `bundle.js` file in order to preview the new changes: Just run the `webpack` command inside the fuckyoupayme directory

## Built With

* [MicroModal](http://micromodal.now.sh) - Node.js library for modals
* [Webpack](https://webpack.js.org/) - Front-end packager for nodejs scripts

## Contributing

Please read [CONTRIBUTING.md](https://github.com/wmellema/FuckYouPayMe/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/wmellema/docker-laravel/tags).

## Authors

* **Wouter Mellema** - *Project Setup* - [wmellema](https://github.com/wmellema)

See also the list of [contributors](https://github.com/wmellema/FuckYouPayMe/contributors) who participated in this project.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details
