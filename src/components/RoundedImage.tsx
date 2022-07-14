import styled from "styled-components";

const Img = styled.img`
  border-radius: 50%;
  width: 250px;
`

export default function RoundedImage (props: any) {
    const {src} = props;
    return (
        <div>
            <Img src={src}/>
        </div>
    )
}
