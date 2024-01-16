package com.km.socialmedia.service.impl;

import com.km.socialmedia.dao.PostDao;
import com.km.socialmedia.model.Post;
import com.km.socialmedia.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    PostDao postDao;

    @Override
    public ResponseEntity<List<Post>> getAllPosts() {
        try {
            return new ResponseEntity<List<Post>>(postDao.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<String> createPost(Post post) {
        postDao.save(post);
        return new ResponseEntity<>("Post created successfully.", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> updatePost(Long id, Post post) {
        Optional<Post> targetPost = postDao.findById(id);

        if (!targetPost.isPresent()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No post found with ID: " + id);
            return new ResponseEntity<String>("No post found with ID: " + id, HttpStatus.NOT_FOUND);
        }

        Post foundPost = targetPost.get();


        /**
         *      If fields are optional, we can write like this
         *
         *      post.getTitle().ifPresent(title -> existingPost.setTitle(title));
         *
         *       // same functionality like this
         *       // :: called method reference
         *
         *         post.getUsername().ifPresent(foundPost::setUsername);
         *         post.getTitle().ifPresent(foundPost::setTitle);
         *         post.getContent().ifPresent(foundPost::setContent);
         *         post.getTimeAgo().ifPresent(foundPost::setTimeAgo);
         */

        foundPost.setUsername(post.getUsername());
        foundPost.setTitle(post.getTitle());
        foundPost.setContent(post.getContent());
        foundPost.setTimeAgo(post.getTimeAgo());

        postDao.save(foundPost);
        return ResponseEntity.ok("Post updated successfully.");
    }
}
