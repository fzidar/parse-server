"use strict";

// Helper functions for accessing the instagram API.
var Parse = require('parse/node').Parse;

const httpsRequest = require('./httpsRequest');

const defaultURL = 'https://graph.instagram.com/'; // Returns a promise that fulfills if this user id is valid.

function validateAuthData(authData) {
  const apiURL = authData.apiURL || defaultURL;
  const path = `${apiURL}me?fields=id&access_token=${authData.access_token}`;
  return httpsRequest.get(path).then(response => {
    if (response && response.data && response.data.id == authData.id) {
      return;
    }

    throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'Instagram auth is invalid for this user.');
  });
} // Returns a promise that fulfills iff this app id is valid.


function validateAppId() {
  return Promise.resolve();
}

module.exports = {
  validateAppId,
  validateAuthData
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BZGFwdGVycy9BdXRoL2luc3RhZ3JhbS5qcyJdLCJuYW1lcyI6WyJQYXJzZSIsInJlcXVpcmUiLCJodHRwc1JlcXVlc3QiLCJkZWZhdWx0VVJMIiwidmFsaWRhdGVBdXRoRGF0YSIsImF1dGhEYXRhIiwiYXBpVVJMIiwicGF0aCIsImFjY2Vzc190b2tlbiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJpZCIsIkVycm9yIiwiT0JKRUNUX05PVF9GT1VORCIsInZhbGlkYXRlQXBwSWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFJQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQVAsQ0FBc0JELEtBQWxDOztBQUNBLE1BQU1FLFlBQVksR0FBR0QsT0FBTyxDQUFDLGdCQUFELENBQTVCOztBQUNBLE1BQU1FLFVBQVUsR0FBRyw4QkFBbkIsQyxDQUVBOztBQUNBLFNBQVNDLGdCQUFULENBQTBCQyxRQUExQixFQUFvQztBQUNsQyxRQUFNQyxNQUFNLEdBQUdELFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQkgsVUFBbEM7QUFDQSxRQUFNSSxJQUFJLEdBQUksR0FBRUQsTUFBTyw2QkFBNEJELFFBQVEsQ0FBQ0csWUFBYSxFQUF6RTtBQUNBLFNBQU9OLFlBQVksQ0FBQ08sR0FBYixDQUFpQkYsSUFBakIsRUFBdUJHLElBQXZCLENBQTRCQyxRQUFRLElBQUk7QUFDN0MsUUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQXJCLElBQTZCRCxRQUFRLENBQUNDLElBQVQsQ0FBY0MsRUFBZCxJQUFvQlIsUUFBUSxDQUFDUSxFQUE5RCxFQUFrRTtBQUNoRTtBQUNEOztBQUNELFVBQU0sSUFBSWIsS0FBSyxDQUFDYyxLQUFWLENBQ0pkLEtBQUssQ0FBQ2MsS0FBTixDQUFZQyxnQkFEUixFQUVKLDBDQUZJLENBQU47QUFJRCxHQVJNLENBQVA7QUFTRCxDLENBRUQ7OztBQUNBLFNBQVNDLGFBQVQsR0FBeUI7QUFDdkIsU0FBT0MsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDRDs7QUFFREMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZKLEVBQUFBLGFBRGU7QUFFZlosRUFBQUE7QUFGZSxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIGFjY2Vzc2luZyB0aGUgaW5zdGFncmFtIEFQSS5cbnZhciBQYXJzZSA9IHJlcXVpcmUoJ3BhcnNlL25vZGUnKS5QYXJzZTtcbmNvbnN0IGh0dHBzUmVxdWVzdCA9IHJlcXVpcmUoJy4vaHR0cHNSZXF1ZXN0Jyk7XG5jb25zdCBkZWZhdWx0VVJMID0gJ2h0dHBzOi8vZ3JhcGguaW5zdGFncmFtLmNvbS8nO1xuXG4vLyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIGlmIHRoaXMgdXNlciBpZCBpcyB2YWxpZC5cbmZ1bmN0aW9uIHZhbGlkYXRlQXV0aERhdGEoYXV0aERhdGEpIHtcbiAgY29uc3QgYXBpVVJMID0gYXV0aERhdGEuYXBpVVJMIHx8IGRlZmF1bHRVUkw7XG4gIGNvbnN0IHBhdGggPSBgJHthcGlVUkx9bWU/ZmllbGRzPWlkJmFjY2Vzc190b2tlbj0ke2F1dGhEYXRhLmFjY2Vzc190b2tlbn1gO1xuICByZXR1cm4gaHR0cHNSZXF1ZXN0LmdldChwYXRoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkID09IGF1dGhEYXRhLmlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRocm93IG5ldyBQYXJzZS5FcnJvcihcbiAgICAgIFBhcnNlLkVycm9yLk9CSkVDVF9OT1RfRk9VTkQsXG4gICAgICAnSW5zdGFncmFtIGF1dGggaXMgaW52YWxpZCBmb3IgdGhpcyB1c2VyLidcbiAgICApO1xuICB9KTtcbn1cblxuLy8gUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyBpZmYgdGhpcyBhcHAgaWQgaXMgdmFsaWQuXG5mdW5jdGlvbiB2YWxpZGF0ZUFwcElkKCkge1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB2YWxpZGF0ZUFwcElkLFxuICB2YWxpZGF0ZUF1dGhEYXRhLFxufTtcbiJdfQ==