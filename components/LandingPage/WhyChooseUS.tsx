interface IWhyChooseUsProps {
  title: string;
  description: string;
}

export function WhyChooseUs({ title, description }: IWhyChooseUsProps) {
  return (
    <div className="container why-us">
      <div className="text-center py-5">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
    </div>
  );
}
