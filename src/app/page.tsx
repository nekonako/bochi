export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full min-h-full max-w-5xl flex-col items-center justify-center font-mono text-sm lg:flex">
        <div className="text-2xl font-bold text-red-500 mt-4"> Bochi The Rock!!!</div>
        <div className="my-8 w-full min-h-full">
          <iframe height="100%" width="100%" className="w-full aspect-video"
            src="https://www.youtube.com/embed/?listType=playlist&list=OLAK5uy_mNWkxcU6VC_aWOFnpqYha-J5UMzwbVlx4&autoplay=1&controls=0&showinfo=0&autohide=1">
          </iframe>
        </div>
        <div className="">
          CA: 6bKMDAdbVMxJEq4HdNNjquxS7DYi73xMN7zNueA8fnFy
        </div>
      </div>
    </main>
  );
}
