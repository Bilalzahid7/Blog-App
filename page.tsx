import { getBlogs } from "../page";

async function BlogId({
  params,
}: {
  params: {
    blogId: string;
  };
}) {
  const blogs = await getBlogs();
  const filterData = blogs.blogs.find((elem: any) => elem.id == params.blogId);

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-8 mb-4">
        Welcome To the Detail Page
      </h1>

      <div className="max-w-screen-2xl mx-auto bg-white p-8 rounded-md shadow-md">
        <img
          src={filterData.photo_url}
          alt="Blog Post Image"
          className="w-full h-80 object-cover mb-4 rounded-md"
        />

        <h1 className="text-3xl font-bold mb-2">{filterData.title}</h1>

        <p className="text-gray-600 mb-4 text-3xl font-bold ">
          {filterData.description}
        </p>

        <div className="prose text-justify">{filterData.content_text}</div>
      </div>
    </>
  );
}

export default BlogId;
