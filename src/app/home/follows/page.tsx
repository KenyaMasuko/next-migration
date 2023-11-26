import { Items } from "@/app/_components/Items";
import { Profile } from "@/app/_components/Profile";
import { getFollowsPosts } from "@/features/posts/follows";
import Image from "next/image";
import React, { Suspense } from "react";

export default async function Home() {
  const posts = await getFollowsPosts();

  return (
    <>
      <main>
        <div className="tabs">
          <h2>
            <a href="#">おすすめ</a>
          </h2>
          <h2>
            <a href="#" className="active">
              フォロー
            </a>
          </h2>
        </div>

        <div className="post_box">
          <form>
            <div className="post_box-input">
              <Suspense>
                <Profile size="md" hasName={false} />
              </Suspense>
              <input type="text" name="text" placeholder="いまどうしてる？" />
              <label>
                <input type="file" name="file" style={{ display: "none" }} />
                <span className="material-icons">add</span>
              </label>
              <button className="">ポスト</button>
            </div>
          </form>
        </div>

        <div className="post">
          <div className="post_profile-image">
            <Image
              width={100}
              height={100}
              src="/images/profile.jpg"
              alt="profile"
            />
          </div>

          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>
                  RyoCa<small>@ryocacode</small>
                </h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              src="/images/post.png"
              className="post_image"
              alt=""
            />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="post_profile-image">
            <Image
              width={100}
              height={100}
              src="/images/profile.jpg"
              alt="profile"
            />
          </div>

          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>
                  RyoCa<small>@ryocacode</small>
                </h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/post.png"
              className="post_image"
            />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="post_profile-image">
            <Image
              width={100}
              height={100}
              src="/images/profile.jpg"
              alt="profile"
            />
          </div>
          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>
                  RyoCa<small>@ryocacode</small>
                </h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/post.png"
              className="post_image"
            />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post_profile-image">
            <Image
              width={100}
              height={100}
              src="/images/profile.jpg"
              alt="profile"
            />
          </div>
          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>
                  RyoCa<small>@ryocacode</small>
                </h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/post.png"
              className="post_image"
            />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post_profile-image">
            <Image
              width={100}
              height={100}
              src="/images/profile.jpg"
              alt="profile"
            />
          </div>
          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>
                  RyoCa<small>@ryocacode</small>
                </h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/post.png"
              className="post_image"
            />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post_profile-image">
            <Image
              width={100}
              height={100}
              src="/images/profile.jpg"
              alt="profile"
            />
          </div>
          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>
                  RyoCa<small>@ryocacode</small>
                </h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/post.png"
              className="post_image"
            />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>

        <Items
          initialItems={posts}
          initialLastId={posts[posts.length - 1].id}
        />
      </main>

      {/* {isModalOpen &&
        createPortal(
          <div id="imageModal" onClick={handleBackdropClick}>
            <img
              src="/images/post.png"
              className="image_modal-content"
              alt=""
            />
            <span className="image_modal-close" onClick={closeModal}>
              ×
            </span>
          </div>,
          document.body
        )} */}
    </>
    //           <dialog id="imageModal">
    //           <div className="">
    //           </div>
    //         </dialog>
    // <Script>
    //   window.onload = () => {
    //     const $postImages = document.querySelectorAll('.post_image')
    //     const $imageModal = document.querySelector('#imageModal')
    //     const $imageModalClose = document.querySelector('.image_modal-close')

    //     // open image modal
    //     $postImages.forEach(($el) => {
    //       $el.addEventListener('click', () => {
    //         $imageModal.showModal()
    //       })
    //     })

    //     // backdrop click
    //     $imageModal.addEventListener('click', (e) => {
    //       if (e.target === $imageModal) {
    //         $imageModal.close()
    //       }
    //     })

    //     // close image modal
    //     $imageModalClose.addEventListener('click', () => {
    //       $imageModal.close()
    //     })
    //   }
    // </scrip>
  );
}
