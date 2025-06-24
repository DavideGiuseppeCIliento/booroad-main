import ParticipantCard from "../components/ParticipantCard";
export default function ParticipantList({ participants }) {
  console.log(participants);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h3>Partecipanti</h3>
        {participants.map((participant, index) => {
          return (
            <div key={index} className="col-4">
              <ParticipantCard
                idParticipant={participant.id}
                firstName={participant.firstName}
                lastName={participant.lastName}
                email={participant.email}
                phone={participant.phone}
                taxCode={participant.taxCode}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
