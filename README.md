# JavaScript Fetch API

## Example 1

The example below fetches an image and sets it as the body background.

The HTML file must have this: `<script src="./assets/script/fetch-01.js" async></script>`

The global `fetch()` method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available. The initial promise returns a response object, which contains the full HTTP response, including the body, headers, status code, CORS type, and URL. With the response returned you can then use an additional parsing method to parse the body of the response.

The promise resolves to the `Response` object representing the response to your request.

A `fetch()` promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A `fetch()` promise does not reject if the server responds with HTTP status codes that indicate errors (`404`, `504`, etc.). Instead, a `then()` handler must check the `Response.ok` and/or `Response.status` properties.

### Screenshots

![image](https://github.com/stefanoturcarelli/javascript-fetch-api/assets/67341828/c10f515e-4892-48ef-919a-e30a516a686a)

![image](https://github.com/stefanoturcarelli/javascript-fetch-api/assets/67341828/309974bf-f1bf-45dc-8733-05dd627f35bf)

