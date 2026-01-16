import React, { useCallback, useEffect } from "react";
import { RTE } from "../index";
import { useForm } from "react-hook-form";
import service from "../../appwrite/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Select, Button } from "../index";

function PostForm({ post }) {
  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;

      if (file) {
        await service.deleteFile(post.featuredImage);
      }

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;

        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subcription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subcription.unsubscribe();
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap -mx-2">
      {/* Left column */}
      <div className="w-full md:w-2/3 px-2">
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <Input
            label="Title"
            placeholder="Enter post title"
            {...register("title", { required: true })}
          />

          <Input
            label="Slug"
            placeholder="Auto-generated slug"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />

          <RTE
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
      </div>

      {/* Right column */}
      <div className="w-full md:w-1/3 px-2 mt-6 md:mt-0">
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <Input
            label="Featured image"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />

          {post && (
            <div className="w-full">
              <img
                src={service.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-md border border-slate-200"
              />
            </div>
          )}

          <Select
            options={["active", "inactive"]}
            label="Status"
            {...register("status", { required: true })}
          />

          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full"
          >
            {post ? "Update post" : "Publish post"}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default PostForm;
