export async function mockWait(time: number, isError?: boolean) {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if (isError) {
        reject(false);
        return;
      }
      resolve(true);
    }, time);
  });
}
