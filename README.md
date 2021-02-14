![Node.js CI](https://github.com/nicolaserny/tvshows-we-love/workflows/Node.js%20CI/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/84908236-42eb-4190-b90f-eff12d875069/deploy-status)](https://app.netlify.com/sites/tvshows-welove/deploys)

# TV Shows we love

This is the website for [tvshows-welove.fr](https://www.tvshows-welove.fr/).

The purpose of this project is to practice [Gatsby](https://www.gatsbyjs.org/), [Sketch](https://www.sketch.com/) and responsive design.

The website displays TV Shows details by using a TMDb datasource. It is updated weekly.

## Start developing

Configure env variables by creating a _.env.development_ file (use the template file as example).

You'll need an `API Key` and `Session ID` from TMDb.

1. [Create your API Key](https://developers.themoviedb.org/3/getting-started/introduction)
2. [Create your Session ID](https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id)
3. Save both to your environment variable file

It should look something like this:

```
API_KEY=your-api-key-here
SESSION_ID=your-session-id-here
```

Navigate into the root directory and launch the following command:

```shell
    gatsby develop
```

## License

[MIT License](https://raw.githubusercontent.com/nicolaserny/tvshows-we-love/master/LICENSE)
