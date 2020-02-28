- [ ] Explain what a token is used for.

    A token is assigned if authentication is verified. This allows the user access to protected routes where a login or other credentials are required.

- [ ] What steps can you take in your web apps to keep your data secure?

    Creating protected routes that require tokens for access.
    If a token is not detected, then access will be denied. 
    If a token is cleared, access will be revoked.

    This allows you to require specific credentials to access info you may not want available publicly.

- [ ] Describe how web servers work.

    Typically, servers do not remember anything you do. However, with Jason Web Tokens, that are stored on the client-side, you can be provided access to various decisions for data transfer based on the client's set permissions. 

    By submitting expected information to the server endpoint, you will be assigned a Jason Web Token. This allows access to protected resources.

- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    Create: Post
    Read: Get
    Update: Put
    Delete: Delete