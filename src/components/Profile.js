import React from 'react'

function Profile() {
    return (
        <div className={"app__content"}>
            <div className={"personalImage"}>
                Some Profile Image
            </div>
            <div className={"description"}>
                <div className={"description__avatar"}>
                    Avatar
                </div>
                <div className={"description__char"}>
                    description of characteristics
                </div>
            </div>
            <div className={"my-posts"}>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile