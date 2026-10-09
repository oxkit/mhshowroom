
# MattressHub interactive showroom

Public site: https://showroom.mattresshub.co

The repository root contains the tested static publication package. The original Azure Static Web Apps workflow deploys it to `mhshowroom`.

Includes seven SonoFlex mattresses, three SonoFrame bed frames and three sofas. Sofa fabric/orientation photos, a room footprint planner and illustrated seat construction support product exploration. Shopify remains the store for prices and ordering.

Source editing and package generation happen in the MattressHub Design System workspace: `interactive/showroom/prepare.cjs`, `build.cjs` and `check.cjs`. Rebuild and test before replacing the publication package. Publish changed public assets together in one commit, then verify the matching GitHub Actions run and the live site.

Product photographs and swatches are references; colours vary by screen. The sofa construction animation is illustrative and is not a measured firmness test. Room outlines use overall product dimensions; internal seat/chaise shapes are schematic. Listed prices match the Shopify store. "Buy directly on mattresshub.co" sends the chosen product and options to the store cart (`/cart?showroom=1`), where Shopify resolves the variant, price and stock and adds every item or none; `check-store.cjs` in the source folder proves each selection resolves.

`room-tour/` is Explore the Room, a 2.5D photographic room with Cove, Haven and Cloud, built on the same product data and components.
