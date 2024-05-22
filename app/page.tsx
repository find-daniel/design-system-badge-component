import Badge from './components/Badge';

export default function Home() {
  return (
    <main className="flex justify-center">
      {/* <!-- Attribute this challenge to yourself! --> */}
      <section className="mt-[200px] flex w-[240px] flex-col gap-6">
        {/* Neutral */}
        <div className="flex items-center gap-6">
          <Badge size="sm" type="neutral" label="Label" />
          <Badge size="md" type="neutral" label="Label" />
          <Badge size="lg" type="neutral" label="Label" />
        </div>
        {/* Error */}
        <div className="flex items-center gap-6">
          <Badge size="sm" type="error" label="Label" />
          <Badge size="md" type="error" label="Label" />
          <Badge size="lg" type="error" label="Label" />
        </div>
        {/* Warning */}
        <div className="flex items-center gap-6">
          <Badge size="sm" type="warning" label="Label" />
          <Badge size="md" type="warning" label="Label" />
          <Badge size="lg" type="warning" label="Label" />
        </div>
        {/* Success */}
        <div className="flex items-center gap-6">
          <Badge size="sm" type="success" label="Label" />
          <Badge size="md" type="success" label="Label" />
          <Badge size="lg" type="success" label="Label" />
        </div>
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Badge size="sm" type="brand" label="Label" />
          <Badge size="md" type="brand" label="Label" />
          <Badge size="lg" type="brand" label="Label" />
        </div>
      </section>
      <div className="credits">
        A challenge by
        <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank">
          &nbsp;GreatFrontEnd Projects
        </a>
        . Built by
        <a href="https://www.greatfrontend.com/projects/u/danieo" target="_blank">
          &nbsp;danieo
        </a>
        .
      </div>
    </main>
  );
}
