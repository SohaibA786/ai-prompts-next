'use client'
import { useState, useEffect } from 'react'

import Promptcard from './Promptcard'

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <Promptcard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))
      }
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const filteredProjects = posts.filter((post) => {
      return post.prompt.toLowerCase().includes(e.target.value.toLowerCase()) || post.tag.toLowerCase().includes(e.target.value.toLowerCase()) || post.creator.username?.toLowerCase().includes(e.target.value.toLowerCase());
    })

    setFilteredPosts(filteredProjects);
  }

  const handleTagClick = (tag) => {
    if (tag[0] === '#')
      tag = tag.slice(1);
    setSearchText(tag);
    const filteredProjects = posts.filter((post) => {
      return post.tag.toLowerCase().includes(tag.toLowerCase());
    })

    setFilteredPosts(filteredProjects);
  }


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('api/prompt');
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or username'
          value={searchText}
          onChange={handleSearchChange}
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={filteredPosts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed