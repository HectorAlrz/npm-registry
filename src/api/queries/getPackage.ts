import type { PackageDetails } from "../types/packageDetails";

export async function getPackage(name: string): Promise<PackageDetails> {
  const rest = await fetch(`https://registry.npmjs.org/${name}`);
  const data = await rest.json();

  return data as PackageDetails;
}
