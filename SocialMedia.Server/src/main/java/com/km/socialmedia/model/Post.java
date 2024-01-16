package com.km.socialmedia.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "tbl_posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String title;
    private String content;
    private String time_ago;  // date
//    private String reactions;
//    private List<String> comments;
//    private String profile_pic;
}

/**
 *
 * 1. User Information:
 * User ID
 * Username
 * Avatar/Profile picture
 * Date joined or registration date
 * User bio/description
 *
 *  2 Post Information:
 * Post ID
 * Post title
 * Post content/body
 * Date and time of the post
 * Post tags or categories
 *
 * 3. Engagement Metrics:
 * Number of likes
 * Number of comments
 * Number of shares or retweets
 * Views or impressions
 *
 * 4. Media Attachments:
 * Images
 * Videos
 * Links
 * Other multimedia content
 *
 * */
