# Webpack v5 TypeScript v5 Boilerplate

Webpack v5 TypeScript v5 Boilerplate - a versatile and powerful project designed to streamline the Web development experience. This project provides a robust foundation for building Web Sites and Apps with ease, utilizing the latest versions of TypeScript (v5) and Webpack (v5). With additional tools such as Jest, ESLint, SASS, Husky, and Commitizen, this configuration ensures better code quality and smoother development.

Some of the key features of this project include Webpack (v5), Webpack Dev Server, easy integration with TypeScript (v5), Jest, SASS, ESLint, and simplified use of images, fonts, and other asset files. The source files are stored in the "src" folder, while a small demo project is included, showcasing the use of TypeScript, HTML, SASS, Jest, images, and fonts. The HTML templates are also conveniently located in the "templates" folder.

With this Webpack configuration, you can accelerate your development process and build high-quality, professional Web projects with minimal effort.

## Usage

Available commands:

- `npm run dev` runs the local development server
- `npm run stage` creates files without minifying the code - _( Files will be located in the "dist" folder )_
- `npm run prod` creates files ready for production - _( All the code will be minified. Files will be located in the "dist" folder )_
- `npm run test` runs unit test functions
- `npm run eslint` runs eslint checks

The last two commands are automatically invoked during the creation of a new git commit.

Always use the `git commit -m ""` command for creating new commits. Husky and Commitizen plugins will do the rest.

## License

[MIT license](http://www.opensource.org/licenses/MIT)