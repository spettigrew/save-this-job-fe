import React from "react";
import {
  Card,
  Image,
  Header,
  Icon,
  FeedLabel,
  Button
} from "semantic-ui-react";
import authWithAxios from "../../utils/authWithAxios";

// interface Props {
//   Name: string;
//   Year: string;
// }

// export const DashCard: React.FC<Props> = ({ Name, Year }) => {
//   return (
//     <>
//       <Card>
//         <Image src="https://picsum.photos/200" wrapped={true} ui={false} />
//         <Card.Content>
//           <Card.Header>{Name}</Card.Header>
//           <Card.Meta>
//             <span className="date">Born: {Year}</span>
//           </Card.Meta>
//           <Card.Description>{Name} is a fool...</Card.Description>
//         </Card.Content>
//         <Card.Content extra={true}>
//           <a>
//             <Icon name="user" />1 Friends
//           </a>
//         </Card.Content>
//       </Card>
//     </>
//   );
// };

export const DashCard = ({ name, url, id, removeJob, logo }) => {
  const imageSrc = logo || "https://picsum.photos/200";

  return (
    <>
      <Card style={{ width: "25%", height: "auto", margin: "1%" }}>
        <Image
          src={imageSrc}
          wrapped={true}
          ui={false}
          style={{ width: "auto", height: "auto" }}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Card.Content
          extra={true}
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <a href={url}>
            <Icon name="thumbtack" />
            Go to Job Post
          </a>
          <a onClick={() => removeJob(id)}>
            <Icon name="trash" />
            Delete
          </a>
        </Card.Content>
      </Card>
    </>
  );
};
