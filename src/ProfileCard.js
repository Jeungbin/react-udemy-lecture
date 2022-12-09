function ProfileCard(props) {
  // instead of props.title
  // const title = props.title;
  // const handle = props.handle;
  const { title, handle } = props;
  return (
    <div>
      title is{title} and handle is {handle}
    </div>
  );
}

export default ProfileCard;
