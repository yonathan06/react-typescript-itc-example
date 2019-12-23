export interface Tweet {
  content: string,
  userName: string,
  date: string,
}
export const getTweets = async (): Promise<{ tweets: Tweet[] }> => {
  const response = await fetch(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`);
  return await response.json();
}