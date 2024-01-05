import Card from "../card";
export async function getBlogs() {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=10"
  );

  if (!res.ok) {
    throw new Error("Could not find anything ");
  }

  return await res.json();
}

async function Blogs() {
  const blogs = await getBlogs();

  return (
    <>
      <h1 className="text-3xl font-bold m-8">
        WEEKLY ARTICLES WITH INSIGHT INTO THE WEEKEND'S MESSAGE
      </h1>
      <h2 className="text-2xl m-8">
        Our blog takes the message from the weekend and lays out next right
        steps, so you can hear a message and do a message in practical ways.
      </h2>
      <div className="p-10 flex gap-5 flex-wrap justify-center">
        {blogs.blogs.map((elem: any) => (
          <Card
            iUrl={elem.photo_url}
            title={elem.title}
            description={elem.description}
            create={elem.created_at}
            id={elem.id}
          />
        ))}
      </div>
    </>
  );
}
export default Blogs;
