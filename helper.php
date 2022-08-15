<?php

function pure_dump($var)
{
    echo '<pre>' . var_export($var, true) . '</pre>';
}

function assets($path)
{
    echo get_template_directory_uri() . "/assets/" . $path;
}

function getAssets($path)
{
    return get_template_directory_uri() . "/assets/" . $path;
}


function pure_get_post_excerpt($post = '', $length = 180)
{
    if (!$post) {
        $post = get_post();
    }
    $post_excerpt = $post->post_excerpt;
    if ($post_excerpt == '') {
        $content = $post->post_content;
        $content = strip_shortcodes($content);
        $content = wp_strip_all_tags($content);
        $pattern = '~(http|https)://[^\s]*~i';
        $content = preg_replace($pattern, '', $content);
        $post_excerpt = mb_strimwidth($content, 0, $length, '…', 'utf-8');
    }

    $post_excerpt = wp_strip_all_tags($post_excerpt);
    $post_excerpt = trim(preg_replace("/[\n\r\t ]+/", ' ', $post_excerpt), ' ');
    return $post_excerpt;
}