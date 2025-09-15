package com.zachary.blog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zachary.blog.model.Post;
import com.zachary.blog.repository.PostRepository;

@Service
public class PostService {
    PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post createPost(Post post) {
        Long id = post.getId();

        if (id != null && postRepository.existsById(id)) {
            return null;
        }

        return postRepository.save(post);
    }
}
