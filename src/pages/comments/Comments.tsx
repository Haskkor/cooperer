import React from 'react';
// import React, { useState } from 'react';
// import { Formik, Form } from 'formik';

// import { ProjectComment } from '../../types/projectComments';

const COMMENTS: React.FC = () => {
  // const [showCreate, setShowCreate] = useState(false);
  // const { error, isLoading, comments } = useComments();
  // const { createComment } = useComment();

  // if (error) return <div>error</div>;
  // if (isLoading) return <div>loading</div>;
  //
  // return (
  //   <div className={'widget'}>
  //     {!showCreate && (
  //       <button onClick={() => setShowCreate(true)}>Add comment</button>
  //     )}
  //     {comments.map((c: ProjectComment) => (
  //       <div key={c.id}>{c.content}</div>
  //     ))}
  //     {showCreate && (
  //       <div>
  //         <h1>Comment</h1>
  //         <Formik
  //           initialValues={{
  //             content: '',
  //             title: ''
  //           }}
  //           onSubmit={(values: FormComment) => {
  //             createComment(values);
  //           }}
  //         >
  //           <Form>
  //             <button type="submit">Submit</button>
  //           </Form>
  //         </Formik>
  //       </div>
  //     )}
  //   </div>
  // );
  return null;
};

export default COMMENTS;
