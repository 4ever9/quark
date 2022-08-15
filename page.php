<?php

function pure_add_page($title, $slug, $template = '')
{
    // get all pages from db
    $pages  = get_pages();
//    pure_dump($pages);
    $exists = false;
    foreach ($pages as $page) {
        if (strtolower($page->post_name) == strtolower($slug)) {
            $exists = true;
        }
    }

    if (!$exists) {
        $id = wp_insert_post(
            array(
                'post_title'     => $title,
                'post_type'      => 'page',
                'post_name'      => $slug,
                'comment_status' => 'closed',
                'ping_status'    => 'closed',
                'post_content'   => '',
                'post_status'    => 'publish',
                'post_author'    => 1,
                'menu_order'     => 0
            )
        );
        if ($id && $template != '') {
            update_post_meta($id, '_wp_page_template', $template);
        }
    }
}
