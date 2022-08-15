<?php

// Control core classes for avoid errors
if (class_exists('CSF')) {

    //
    // Set a unique slug-like ID
    $prefix = 'pure-setting';

    //
    // Create options
    CSF::createOptions($prefix, array(
        'menu_title' => '自定义配置',
        'menu_slug' => 'pure-setting',
    ));

    CSF::createSection($prefix, array(
        'title' => '首页',
        'fields' => array(
            array(
                'id' => 'carousel',
                'type' => 'repeater',
                'title' => '轮博',
                'fields' => array(
                    array(
                        'id' => 'img',
                        'type' => 'media',
                        'title' => '背景图'
                    ),
                ),
            ),
            array(
                'id' => 'app',
                'type' => 'repeater',
                'title' => '应用场景',
                'fields' => array(
                    array(
                        'id' => 'tag',
                        'type' => 'text',
                        'title' => '标签'
                    ),
                    array(
                        'id' => 'title',
                        'type' => 'text',
                        'title' => '标题'
                    ),
                    array(
                        'id' => 'sub-title',
                        'type' => 'text',
                        'title' => '次标题'
                    ),
                    array(
                        'id' => 'desc',
                        'type' => 'text',
                        'title' => '描述'
                    ),
                    array(
                        'id' => 'tn',
                        'type' => 'media',
                        'title' => '图片'
                    ),
                ),
            ),
        )
    ));

    CSF::createSection($prefix, array(
        'title' => '合作伙伴',
        'fields' => array(
            array(
                'id' => 'partner',
                'type' => 'repeater',
                'title' => '合作伙伴',
                'fields' => array(
                    array(
                        'id' => 'img',
                        'type' => 'media',
                        'title' => 'Logo'
                    ),
                    array(
                        'id' => 'href',
                        'type' => 'text',
                        'title' => '链接'
                    ),
                ),
            ),
        )
    ));

    //
    // Create a section
    CSF::createSection($prefix, array(
        'title' => '关于我们',
        'fields' => array(
            array(
                'id' => 'credentials',
                'type' => 'repeater',
                'title' => '证书',
                'fields' => array(
                    array(
                        'id' => 'img',
                        'type' => 'media',
                        'title' => '图片'
                    ),
                ),
            ),
        )
    ));

    CSF::createSection($prefix, array(
        'title' => '标准认证',
        'fields' => array(
            array(
                'id' => 'product_personal',
                'type' => 'repeater',
                'title' => '个人认证',
                'fields' => array(
                    array(
                        'id' => 'title',
                        'type' => 'text',
                        'title' => '标题'
                    ),
                    array(
                        'id' => 'desc',
                        'type' => 'text',
                        'title' => '描述'
                    ),
                    array(
                        'id' => 'template',
                        'type' => 'select',
                        'title' => '选择模板',
                        'placeholder' => '选择模板',
                        'options' => array(
                            'id_verify' => '身份证实名身份证',
                            'bank_verify' => '银行卡三/四要素认证',
                            'operate_verify' => '运营商三要素认证',
                            'face_verify' => '人脸实名认证',
                        ),
                        'default' => 'id_verify'
                    ),
                    array(
                        'id' => 'logo',
                        'type' => 'media',
                        'title' => '图标'
                    ),
                    array(
                        'id' => 'app',
                        'type' => 'repeater',
                        'title' => '应用场景',
                        'fields' => array(
                            array(
                                'id' => 'img',
                                'type' => 'media',
                            ),
                        ),
                    ),
                ),
            ),

            array(
                'id' => 'product_company',
                'type' => 'repeater',
                'title' => '企业认证',
                'fields' => array(
                    array(
                        'id' => 'title',
                        'type' => 'text',
                        'title' => '标题'
                    ),
                    array(
                        'id' => 'desc',
                        'type' => 'text',
                        'title' => '描述'
                    ),
                    array(
                        'id' => 'template',
                        'type' => 'select',
                        'title' => '选择模板',
                        'placeholder' => '选择模板',
                        'options' => array(
                            'company_total_verify' => '企业公户认证',
                            'company_legal_verify' => '企业法人要素认证',
                            'company_bill_verify' => '增值税发票核验',
                        ),
                        'default' => 'company_total_verify'
                    ),
                    array(
                        'id' => 'logo',
                        'type' => 'media',
                        'title' => '图标'
                    ),
                    array(
                        'id' => 'app',
                        'type' => 'repeater',
                        'title' => '应用场景',
                        'fields' => array(
                            array(
                                'id' => 'img',
                                'type' => 'media',
                            ),
                        ),
                    ),
                ),
            ),

            array(
                'id' => 'product_ocr',
                'type' => 'repeater',
                'title' => 'OCR双引擎',
                'fields' => array(
                    array(
                        'id' => 'title',
                        'type' => 'text',
                        'title' => '标题'
                    ),
                    array(
                        'id' => 'desc',
                        'type' => 'text',
                        'title' => '描述'
                    ),
                    array(
                        'id' => 'template',
                        'type' => 'select',
                        'title' => '选择模板',
                        'placeholder' => '选择模板',
                        'options' => array(
                            'ocr_verify' => 'OCR双引擎',
                        ),
                        'default' => 'ocr_verify'
                    ),
                    array(
                        'id' => 'logo',
                        'type' => 'media',
                        'title' => '图标'
                    ),
                    array(
                        'id' => 'app',
                        'type' => 'repeater',
                        'title' => '应用场景',
                        'fields' => array(
                            array(
                                'id' => 'img',
                                'type' => 'media',
                            ),
                        ),
                    ),
                ),
            ),

            array(
                'id' => 'product_msg',
                'type' => 'repeater',
                'title' => '短信服务',
                'fields' => array(
                    array(
                        'id' => 'title',
                        'type' => 'text',
                        'title' => '标题'
                    ),
                    array(
                        'id' => 'desc',
                        'type' => 'text',
                        'title' => '描述'
                    ),
                    array(
                        'id' => 'template',
                        'type' => 'select',
                        'title' => '选择模板',
                        'placeholder' => '选择模板',
                        'options' => array(
                            'msg_verify' => '短信服务',
                        ),
                        'default' => 'msg_verify'
                    ),
                    array(
                        'id' => 'logo',
                        'type' => 'media',
                        'title' => '图标'
                    ),
                    array(
                        'id' => 'app',
                        'type' => 'repeater',
                        'title' => '应用场景',
                        'fields' => array(
                            array(
                                'id' => 'img',
                                'type' => 'media',
                            ),
                        ),
                    ),
                ),
            ),
        )
    ));

    CSF::createSection($prefix, array(
        'title' => '备份',
        'fields' => array(
            array(
                'id' => 'backup',
                'type' => 'backup',
                'title' => '备份',
            ),

        )
    ));

}

