import React from "react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

// Formik
import { Field, ErrorMessage } from "formik";
// Formik

// React Intl
import "./richFieldStyle.css";
const RichTextField = ({ form, field, label_text }) => {
  const DescriptionChangeHandler = (event, editor) => {
    const data = editor.getData();
    console.log(data);
    form.setFieldValue(field, data);
  };

  const config = {
    blockToolbar: {
      items: [
        "paragraph",
        "heading1",
        "heading2",
        "|",
        "bulletedList",
        "numberedList",
      ],
      shouldNotGroupWhenFull: true,
    },
    ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command.
      uploadUrl:
        // 'https://localhost:44374/api/v1/announcements/upload-file?command=QuickUpload&type=Images&responseType=json'
        "https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json",
    },
    image: {
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative'
      ]
    },
    toolbar: {
        items: [
          'heading',
          '|',
          'bold',
          'italic',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'insertTable',
          '|',
          // 'imageUpload',
          '|',
          'undo',
          'redo'
        ]
      },
    mediaEmbed: {
      previewsInData: true,
    },

    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
  };

  return (
    <div className="col-span-2">
      <label htmlFor={field} className="label text-xs font-bold">
        {label_text}
      </label>
      <div
        className={`my-ck ${form.touched[field] && form.errors[field] ? "my-ck-error" : ""
          } ${form.values[field] &&
          form.values[field].toString().length > 0 &&
          "my-ck-active"
          }`}
      >
        <CKEditor
          data={form.values[field]}
          editor={ClassicEditor}
          config={config}

          onChange={DescriptionChangeHandler}
          className=""
          onReady={editor => {
            editor.editing.view.change(writer => {
              writer.setStyle('min-height', '150px', editor.editing.view.document.getRoot());
              // writer.setStyle(
              //     'z-index',
              //     '999999 !important',
              //     editor.editing.view.document.getRoot()
              // );
            });
          }}
        />
      </div>
      <p className="text-red-500 text-xs mt-3">
        <ErrorMessage name={field} />
      </p>
    </div>
  );
};

export default RichTextField;
