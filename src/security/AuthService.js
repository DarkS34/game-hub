export function isAuthenticated( data ) {
  return data?.username === "test" && data?.password === "123";
}
