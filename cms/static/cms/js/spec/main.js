/* globals requirejs, requireSerial */
/* eslint-disable quote-props */

(function(requirejs, requireSerial) {
    'use strict';

    if (window) {
        define('add-a11y-deps',
            [
                'underscore',
                'underscore.string',
                'edx-ui-toolkit/js/utils/html-utils',
                'edx-ui-toolkit/js/utils/string-utils'
            ], function(_, str, HtmlUtils, StringUtils) {
                window._ = _;
                window._.str = str;
                window.edx = window.edx || {};
                window.edx.HtmlUtils = HtmlUtils;
                window.edx.StringUtils = StringUtils;
            });
    }

    var i, specHelpers, testFiles;

    requirejs.config({
        baseUrl: '/base/',
        paths: {
            'gettext': 'js/test/i18n',
            'codemirror': 'js/vendor/CodeMirror/codemirror',
            'jquery': 'js/vendor/jquery',
            'jquery-migrate': 'js/vendor/jquery-migrate',
            'jquery.ui': 'js/vendor/jquery-ui.min',
            'jquery.form': 'js/vendor/jquery.form',
            'jquery.markitup': 'js/vendor/markitup/jquery.markitup',
            'jquery.leanModal': 'js/vendor/jquery.leanModal',
            'jquery.ajaxQueue': 'js/vendor/jquery.ajaxQueue',
            'jquery.smoothScroll': 'js/vendor/jquery.smooth-scroll.min',
            'jquery.scrollTo': 'common/js/vendor/jquery.scrollTo',
            'jquery.timepicker': 'js/vendor/timepicker/jquery.timepicker',
            'jquery.cookie': 'js/vendor/jquery.cookie',
            'jquery.qtip': 'js/vendor/jquery.qtip.min',
            'jquery.fileupload': 'js/vendor/jQuery-File-Upload/js/jquery.fileupload',
            'jquery.fileupload-process': 'js/vendor/jQuery-File-Upload/js/jquery.fileupload-process',   // eslint-disable-line max-len
            'jquery.fileupload-validate': 'js/vendor/jQuery-File-Upload/js/jquery.fileupload-validate',   // eslint-disable-line max-len
            'jquery.iframe-transport': 'js/vendor/jQuery-File-Upload/js/jquery.iframe-transport',   // eslint-disable-line max-len
            'jquery.inputnumber': 'js/vendor/html5-input-polyfills/number-polyfill',
            'jquery.immediateDescendents': 'coffee/src/jquery.immediateDescendents',
            'jquery.simulate': 'js/vendor/jquery.simulate',
            'datepair': 'js/vendor/timepicker/datepair',
            'date': 'js/vendor/date',
            moment: 'common/js/vendor/moment-with-locales',
            'text': 'js/vendor/requirejs/text',
            'underscore': 'common/js/vendor/underscore',
            'underscore.string': 'common/js/vendor/underscore.string',
            'backbone': 'common/js/vendor/backbone',
            'backbone.associations': 'js/vendor/backbone-associations-min',
            'backbone.paginator': 'common/js/vendor/backbone.paginator',
            'backbone-relational': 'js/vendor/backbone-relational.min',
            'tinymce': 'js/vendor/tinymce/js/tinymce/tinymce.full.min',
            'jquery.tinymce': 'js/vendor/tinymce/js/tinymce/jquery.tinymce',
            'xmodule': 'xmodule_js/src/xmodule',
            'xblock/cms.runtime.v1': 'cms/js/xblock/cms.runtime.v1',
            'xblock': 'common/js/xblock',
            'utility': 'js/src/utility',
            'accessibility': 'js/src/accessibility_tools',
            'sinon': 'common/js/vendor/sinon',
            'squire': 'common/js/vendor/Squire',
            'jasmine-imagediff': 'js/vendor/jasmine-imagediff',
            'draggabilly': 'js/vendor/draggabilly',
            'domReady': 'js/vendor/domReady',
            'URI': 'js/vendor/URI.min',
            'mock-ajax': 'js/vendor/mock-ajax',
            mathjax: '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_SVG&delayStartupUntil=configured',   // eslint-disable-line max-len
            'youtube': '//www.youtube.com/player_api?noext',
            'coffee/src/ajax_prefix': 'coffee/src/ajax_prefix',
            'js/spec/test_utils': 'js/spec/test_utils'
        },
        shim: {
            'gettext': {
                exports: 'gettext'
            },
            'date': {
                exports: 'Date'
            },
            'jquery-migrate': ['jquery'],
            'jquery.ui': {
                deps: ['jquery'],
                exports: 'jQuery.ui'
            },
            'jquery.form': {
                deps: ['jquery'],
                exports: 'jQuery.fn.ajaxForm'
            },
            'jquery.markitup': {
                deps: ['jquery'],
                exports: 'jQuery.fn.markitup'
            },
            'jquery.leanModal': {
                deps: ['jquery'],
                exports: 'jQuery.fn.leanModal'
            },
            'jquery.smoothScroll': {
                deps: ['jquery'],
                exports: 'jQuery.fn.smoothScroll'
            },
            'jquery.ajaxQueue': {
                deps: ['jquery'],
                exports: 'jQuery.fn.ajaxQueue'
            },
            'jquery.scrollTo': {
                deps: ['jquery'],
                exports: 'jQuery.fn.scrollTo'
            },
            'jquery.cookie': {
                deps: ['jquery'],
                exports: 'jQuery.fn.cookie'
            },
            'jquery.qtip': {
                deps: ['jquery'],
                exports: 'jQuery.fn.qtip'
            },
            'jquery.fileupload': {
                deps: ['jquery.ui', 'jquery.iframe-transport'],
                exports: 'jQuery.fn.fileupload'
            },
            'jquery.fileupload-process': {
                deps: ['jquery.fileupload']
            },
            'jquery.fileupload-validate': {
                deps: ['jquery.fileupload']
            },
            'jquery.inputnumber': {
                deps: ['jquery'],
                exports: 'jQuery.fn.inputNumber'
            },
            'jquery.simulate': {
                deps: ['jquery'],
                exports: 'jQuery.fn.simulate'
            },
            'jquery.tinymce': {
                deps: ['jquery', 'tinymce'],
                exports: 'jQuery.fn.tinymce'
            },
            'datepair': {
                deps: ['jquery.ui', 'jquery.timepicker']
            },
            'underscore': {
                exports: '_'
            },
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            'backbone.associations': {
                deps: ['backbone'],
                exports: 'Backbone.Associations'
            },
            'backbone.paginator': {
                deps: ['backbone'],
                exports: 'Backbone.PageableCollection'
            },
            'backbone-relational': {
                deps: ['backbone']
            },
            'youtube': {
                exports: 'YT'
            },
            'codemirror': {
                exports: 'CodeMirror'
            },
            'tinymce': {
                exports: 'tinymce'
            },
            'mathjax': {
                exports: 'MathJax',
                init: function() {
                    window.MathJax.Hub.Config({
                        tex2jax: {
                            inlineMath: [['\\(', '\\)'], ['[mathjaxinline]', '[/mathjaxinline]']],
                            displayMath: [['\\[', '\\]'], ['[mathjax]', '[/mathjax]']]
                        }
                    });
                    return window.MathJax.Hub.Configured();
                }
            },
            'accessibility': {
                exports: 'accessibility',
                deps: ['add-a11y-deps']
            },
            'URI': {
                exports: 'URI'
            },
            'xmodule': {
                exports: 'XModule'
            },
            'sinon': {
                exports: 'sinon'
            },
            'jasmine-imagediff': {},
            'common/js/spec_helpers/jasmine-extensions': {
                deps: ['jquery']
            },
            'common/js/spec_helpers/jasmine-stealth': {
                deps: ['underscore', 'underscore.string']
            },
            'common/js/spec_helpers/jasmine-waituntil': {
                deps: ['jquery']
            },
            'xblock/core': {
                exports: 'XBlock',
                deps: ['jquery', 'jquery.immediateDescendents']
            },
            'xblock/runtime.v1': {
                exports: 'XBlock',
                deps: ['xblock/core']
            },
            'mock-ajax': {
                deps: ['jquery']
            },
            'cms/js/main': {
                deps: ['coffee/src/ajax_prefix']
            },
            'coffee/src/ajax_prefix': {
                deps: ['jquery']
            }
        }
    });

    jasmine.getFixtures().fixturesPath += 'coffee/fixtures';

    testFiles = [
        'cms/js/spec/main_spec',
        'cms/js/spec/xblock/cms.runtime.v1_spec',
        'coffee/spec/models/course_spec',
        'coffee/spec/models/metadata_spec',
        'coffee/spec/models/section_spec',
        'coffee/spec/models/settings_course_grader_spec',
        'coffee/spec/models/settings_grading_spec',
        'coffee/spec/models/textbook_spec',
        'coffee/spec/models/upload_spec',
        'coffee/spec/views/course_info_spec',
        'coffee/spec/views/metadata_edit_spec',
        'coffee/spec/views/textbook_spec',
        'coffee/spec/views/upload_spec',
        'js/spec/video/transcripts/utils_spec',
        'js/spec/video/transcripts/editor_spec',
        'js/spec/video/transcripts/videolist_spec',
        'js/spec/video/transcripts/message_manager_spec',
        'js/spec/video/transcripts/file_uploader_spec',
        'js/spec/models/component_template_spec',
        'js/spec/models/explicit_url_spec',
        'js/spec/models/xblock_info_spec',
        'js/spec/models/xblock_validation_spec',
        'js/spec/models/license_spec',
        'js/spec/utils/drag_and_drop_spec',
        'js/spec/utils/handle_iframe_binding_spec',
        'js/spec/utils/module_spec',
        'js/spec/views/active_video_upload_list_spec',
        'js/spec/views/previous_video_upload_spec',
        'js/spec/views/video_thumbnail_spec',
        'js/spec/views/course_video_settings_spec',
        'js/spec/views/previous_video_upload_list_spec',
        'js/spec/views/assets_spec',
        'js/spec/views/baseview_spec',
        'js/spec/views/container_spec',
        'js/spec/views/module_edit_spec',
        'js/spec/views/paged_container_spec',
        'js/spec/views/group_configuration_spec',
        'js/spec/views/unit_outline_spec',
        'js/spec/views/xblock_spec',
        'js/spec/views/xblock_editor_spec',
        'js/spec/views/xblock_string_field_editor_spec',
        'js/spec/views/xblock_validation_spec',
        'js/spec/views/license_spec',
        'js/spec/views/paging_spec',
        'js/spec/views/login_studio_spec',
        'js/spec/views/pages/container_spec',
        'js/spec/views/pages/container_subviews_spec',
        'js/spec/views/pages/group_configurations_spec',
        'js/spec/views/pages/course_outline_spec',
        'js/spec/views/pages/course_rerun_spec',
        'js/spec/views/pages/index_spec',
        'js/spec/views/pages/library_users_spec',
        'js/spec/views/modals/base_modal_spec',
        'js/spec/views/modals/edit_xblock_spec',
        'js/spec/views/modals/move_xblock_modal_spec',
        'js/spec/views/modals/validation_error_modal_spec',
        'js/spec/views/move_xblock_spec',
        'js/spec/views/settings/main_spec',
        'js/spec/factories/xblock_validation_spec',
        'js/certificates/spec/models/certificate_spec',
        'js/certificates/spec/views/certificate_details_spec',
        'js/certificates/spec/views/certificate_editor_spec',
        'js/certificates/spec/views/certificates_list_spec',
        'js/certificates/spec/views/certificate_preview_spec'
    ];

    i = 0;

    while (i < testFiles.length) {
        testFiles[i] = '/base/' + testFiles[i] + '.js';
        i++;
    }

    specHelpers = [
        'common/js/spec_helpers/jasmine-extensions',
        'common/js/spec_helpers/jasmine-stealth',
        'common/js/spec_helpers/jasmine-waituntil'
    ];

    requireSerial(specHelpers.concat(testFiles), function() {
        return window.__karma__.start();  // eslint-disable-line no-underscore-dangle
    });
}).call(this, requirejs, requireSerial);
