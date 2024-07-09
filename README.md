# SQLi-Detector
Imports and Setup:

Imports the express library and creates an instance of express named app.
Initializes the Express application.
Route Definition:

Defines an HTTP GET endpoint at /test.
Uses app.get('/test', ...) to handle GET requests to /test.
Takes req (request) and res (response) as parameters.
Request Handling:

Retrieves the value of the query parameter input from the request using req.query.input.
Performs a simple check (/['"=;]/.test(userInput)) to detect potentially dangerous characters (', ", =, ;) in the userInput.
Response Generation:

If potentially dangerous characters are found (isVulnerable is true), it responds with 'Potential SQL Injection Detected'.
Otherwise, it responds with 'Input seems safe'.
Server Listening:

Starts the server on port 3000 using app.listen(3000, ...).
Outputs 'Server running on port 3000' to the console once the server starts.
Explanation:
Express: A minimalist web framework for Node.js that provides a robust set of features for web and mobile applications.
Route /test: This route listens for GET requests. It expects a query parameter named input (/test?input=someValue).
Security Check: The server performs a basic security check on the input query parameter to detect potential SQL injection attempts by checking for specific characters (', ", =, ;).
Response: Depending on whether potentially dangerous characters are found, it sends an appropriate response back to the client.
Example Usage:
You can test this server by running it (node filename.js) and accessing http://localhost:3000/test?input=someValue in your browser or using tools like curl or Postman.
For example:
http://localhost:3000/test?input=someValue might respond with 'Input seems safe'.
http://localhost:3000/test?input=some'Value might respond with 'Potential SQL Injection Detected'.
