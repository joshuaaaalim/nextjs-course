"use client";
import { useParams } from "next/navigation"


export default function ProfileIDPostID() {
    const params = useParams();
    console.log("id");
    console.log(params.id);
    console.log('postId');
    console.log(params.postId);
    return<div>My id profile's post  Page</div>;
}