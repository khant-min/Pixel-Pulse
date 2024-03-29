package com.km.socialmedia.service;

import com.km.socialmedia.model.Post;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PostService {
    public ResponseEntity<List<Post>> getAllPosts();
    public ResponseEntity<String> createPost(Post post);
    public ResponseEntity<String> updatePost(Long id, Post post);
    public ResponseEntity<String> deletePost(Long id);
}
