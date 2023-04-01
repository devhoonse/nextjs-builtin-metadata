import PostMeta from "@/components/PostMeta";
import posts from "@/data/posts";

/**
 * 페이지 : /blog/${slug} 에서 slug 값을 페이지 컴포넌트로 전달하기 위한 Parser
 * @param params
 */
export function getServerSideProps({ params }: { params: { slug: string } }) {

  // 페이지 : /blog/${slug} 에서 slug 값을 읽어옵니다.
  const { slug } = params;

  // 읽어온 slug 값이 일치하는 포스트를 데이터베이스에서 찾아옵니다.
  const post = posts.find(p => p.slug === slug);

  // 검색된 포스트 정보를 페이지 컴포넌트로 전달합니다.
  return {
    props: {
      slug,
      post
    }
  };
}

/**
 * 페이지 : /blog/${slug}
 * @constructor
 */
function Post(props: {
  slug: string;
  post: undefined
    | {id: string, slug: string, title: string, subtitle: string, image: string}
}) {
  // 페이지 마크업 구조입니다.
  return (
    <div>
      <PostMeta
        title={props.post?.title || `Not Found: ${props.slug}`}
        subtitle={props.post?.subtitle || `Not Found : ${props.slug}`}
        imageUrl={props.post?.image || `Not Found : ${props.slug}`}
        description={props.post?.subtitle || `Not Found : ${props.slug}`}
      />
      <h2>{props.post?.title || `Not Found: ${props.slug}`}</h2>
      <p>{props.post?.subtitle || `Not Found: ${props.slug}`}</p>
    </div>
  );
}

export default Post;
