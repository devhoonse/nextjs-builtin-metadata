import Head from "next/head";

/**
 * 블로그 포스트 페이지의 메타 데이터로 포함할 정보들입니다.
 * * title : 포스트 제목
 * * subtitle : 포스트 부제목
 * * imageUrl : 썸네일 이미지 URL
 * * description : 포스트 요약 설명
 */
type PostMetaProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
};

/**
 * 블로그 포스트 페이지의 메타 데이터 그룹입니다.
 * @constructor
 */
function PostMeta({ title, subtitle, imageUrl, description }: PostMetaProps) {
  return (
    <Head>
      {/* 기본 메타 데이터 */}
      <title>{title}</title>
      <meta name="description" content={subtitle}/>
      {/* 오픈 그래프 메타 데이터 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      {/* 트위터 카드 메타 데이터 */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
    </Head>
  );
}

export default PostMeta;
