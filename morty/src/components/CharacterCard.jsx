export const CharacterCard = ({ id, name, image }) => {
    return (
      <section style={{ height: 200, textAlign: "center" }}>
        <h2 className="text-capitalize">
          {id} - {name}
        </h2>
        <img src={image} alt={name} style={{ width: 150, borderRadius: "14px" }} />
      </section>
    );
  };
  