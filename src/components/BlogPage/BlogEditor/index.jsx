import React from 'react'
import { Editor } from '@tinymce/tinymce-react'; 
import parse from 'html-react-parser'
export default function BlogEditor() {
    const [content,setContent] = React.useState('')
    const handleEditorChange = (e) => {
        console.log('Content was updated:');
        setContent(e.target.getContent())
    }

    const handleSubmit = () => {
        console.log("SUBMIT")
    }
    
    return (
        <div>
            {console.log(content)}
            <Editor
                apiKey="pdghz8jzofv3tlt4rfqdkybgl0mckus15kmx6dzdq563ao1t"
                initialValue="<p></p>"
                init={{
                    // width: 600,
                    height: 600,
                    plugins: [
                    'advlist autolink link image lists charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                    'table emoticons template paste help'
                    ],
                    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | link image | preview media fullpage | ' +
                    'forecolor backcolor emoticons | help',
                    menu: {
                    favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
                    },
                    menubar: 'favs file edit view insert format tools table help',
                }}
                onChange={(e)=> {handleEditorChange(e)}}
            />
            <div>{parse(content)}</div>
        </div>
    )
}
