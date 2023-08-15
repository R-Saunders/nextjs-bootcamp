type HobbiePageParam = {
  hobbie: string
}

export default function HobbiePage({ params }: { params: HobbiePageParam }) {
  console.log(params);
  return <p>This is the individual pet page for {params.hobbie}</p>;
}