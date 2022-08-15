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
                'title' => '轮播',
                'fields' => array(
                    array(
                        'id' => 'img',
                        'type' => 'media',
                        'title' => '背景图'
                    ),
                    array(
                        'id' => 'href',
                        'type' => 'text',
                        'title' => '链接'
                    )
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
        'title' => '标准认证-个人认证',
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
                            'bank_verify-0' => '银行卡三要素认证',
                            'bank_verify-1' => '银行卡四要素认证',
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
                                'title' => '背景'
                            ),
                            array(
                                'id' => 'desc',
                                'type' => 'text',
                                'title' => '描述'
                            ),
                        ),
                    ),
                ),
            ),
        )
    ));

    CSF::createSection($prefix, array(
            'title' => '标准认证-企业认证',
            'fields' => array(
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
                                'company_total_verify-0' => '企业公户验证',
                                'company_total_verify-1' => '企业打款验证',
                                'company_legal_verify-0' => '企业法人三要素认证',
                                'company_legal_verify-1' => '企业法人四要素认证',
                                'company_legal_verify-2' => '企业信息查询',
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
            )
        )
    );

    CSF::createSection($prefix, array(
            'title' => '标准认证-OCR',
            'fields' => array(
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
                                'ocr_verify-0' => '身份证OCR',
                                'ocr_verify-1' => '银行卡OCR',
                                'ocr_verify-2' => '营业执照OCR',
                                'ocr_verify-3' => '增值税发票OCR',
                                'ocr_verify-4' => '开放许可证OCR',
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
            )
        )
    );

    CSF::createSection($prefix, array(
            'title' => '标准认证-短信',
            'fields' => array(
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
                                'msg_verify-0' => '短信验证码',
                                'msg_verify-1' => '短信通知',
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
        )
    );

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

