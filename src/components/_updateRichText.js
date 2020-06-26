import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import updateField from "../helpers/updateField";

const UpdateRichText = ({
  coll,
  id,
  keyVal,
  value,
  stateSetter = function () {},
  submit = false,
}) => {
  const [longDesc, setLongDesc] = useState(value);

  function handleEditorChange(content, editor) {
    setLongDesc(content);
  }

  useEffect(() => {
    if (submit) {
      stateSetter((prevState) => ({ ...prevState, [keyVal]: longDesc }));
    } else {
      updateField(coll, id, keyVal, longDesc);
    }
  }, [longDesc, coll, id, keyVal, stateSetter, submit]);

  return (
    <>
      <Editor
        apiKey="f9rkgdsq6apwm7ad6n6g6hy5e19p3h01hn8oecwx9aiql4vi"
        initialValue={longDesc ? longDesc.toString() : " "}
        init={{
          document_base_url: `${process.env.PUBLIC_URL}`,
          skin_url: `${process.env.PUBLIC_URL}`,
          theme_url: `${process.env.PUBLIC_URL}`,
          height: 200,
          menubar: false,
          content_css: "writer",
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={handleEditorChange}
      />
    </>
  );
};

export default UpdateRichText;
