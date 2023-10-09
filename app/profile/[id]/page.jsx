"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useSearchParams } from "next/navigation"

import Profile from '@components/profile'

const UserProfile = ({ params }) => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    const searchParam = useSearchParams();
    const userName = searchParam.get("name");

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params.id}/posts`);
            const data = await response.json();

            setPosts(data);
        }
        if (session?.user.id) fetchPosts();
    }, []);


    return (
        <Profile
            name={userName}
            desc={`Welcome to ${userName}'s profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination.`}
            data={posts}
        />
    )
}

export default UserProfile