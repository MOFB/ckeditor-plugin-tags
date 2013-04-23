/*
 * Tags - CKeditor Plugin - v0.0.1
 * https://github.com/MOFB/ckeditor-plugin-tags
 * Copyright (c) 2013 Master Of Bits, LLC. Licensed MIT
 */
CKEDITOR.plugins.add('tags', {
	init: function(editor) {
        editor.addCommand('editTags',  new CKEDITOR.dialogCommand('editTagsDialog') );
        editor.ui.addButton('Tags', {
            label:    'Tags',
            command: 'editTags',
            icon:    this.path + 'images/tags.png'
        });
	}
});
CKEDITOR.dialog.add('editTagsDialog', function(editor)
{
    return {
        title:     'Tags for this record',
        minWidth:  400,
        minHeight: 200,
        contents:
        [
            {
                id:      'general',
                label:   'General',
                elements:
                [
                    {
                        type:   'html',
                        html:   '<p>All tags should be lowercase and separated by a comma.</p>'
                    },
                    {
                        type:   'textarea',
                        id:     'tags',
                        label:  'Tags'
                    }
                ]
            }
        ],
        onOk: function (res) {
            $('input[name="tags"]').val(this.getValueOf('general', 'tags'));
            $('.cke_button__save').removeClass('saved').addClass('not_saved');
            CKEDITOR_CHANGED = true;
        },
        onShow: function (res) {
            this.setValueOf('general', 'tags', $('input[name="tags"]').val());
        }
    };
});
