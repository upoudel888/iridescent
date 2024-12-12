"use server";
import connectMongoDB from "@/lib/mongodb";
import Poem from "@/app/models/poem";
import { revalidatePath } from "next/cache";

// create
export async function addPoem(formData: FormData) {
  try {
    await connectMongoDB();
    await Poem.create({
      title: (formData.get("title") as string) || "",
      verses: (formData.get("verses") as string) || "",
    });
    revalidatePath("/poems");
    alert("added poem");
  } catch (error) {
    console.error("Error adding poem:", error);
  }
}

// read
export async function getPoems() {
  try {
    await connectMongoDB();
    const poems = await Poem.find({});
    console.log(poems);
    return poems;
  } catch (error) {
    console.error("Error fetching poems:", error);
    throw new Error("Failed to fetch poems.");
  }
}

// update
export async function updatePoem(formData: FormData) {
  try {
    await connectMongoDB();
    const poemId = formData.get("id") as string;
    const title = formData.get("title") as string;
    const verses = formData.get("verses") as string;

    await Poem.findByIdAndUpdate(poemId, { title, verses });
    revalidatePath("/poems");
  } catch (error) {
    console.error("Error updating poem:", error);
    throw new Error("Failed to update poem.");
  }
}

// delete
export async function deletePoem(poemId: string) {
  try {
    await connectMongoDB();

    await Poem.findByIdAndDelete(poemId);
    revalidatePath("/poems");
  } catch (error) {
    console.error("Error deleting poem:", error);
    throw new Error("Failed to delete poem.");
  }
}
